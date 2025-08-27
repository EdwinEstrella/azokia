/*
  # Crear tabla de facturas (invoices)
  1. Nueva tabla: invoices (id uuid, invoice_number, client_id, user_id, issue_date, due_date, total_amount, status)
  2. Seguridad: Habilitar RLS, políticas CRUD
  3. Índices: Para búsquedas y relaciones
*/
CREATE TABLE IF NOT EXISTS invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_number text UNIQUE NOT NULL,
  client_id uuid REFERENCES clients(id) ON DELETE CASCADE,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  issue_date timestamptz NOT NULL DEFAULT now(),
  due_date timestamptz NOT NULL,
  total_amount decimal(10,2) NOT NULL CHECK (total_amount >= 0),
  status text DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'PAID', 'PARTIALLY_PAID', 'OVERDUE', 'CANCELLED')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

-- Políticas CRUD para facturas
CREATE POLICY "Users can view own invoices" ON invoices
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own invoices" ON invoices
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own invoices" ON invoices
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own invoices" ON invoices
  FOR DELETE USING (auth.uid() = user_id);

-- Índices
CREATE INDEX idx_invoices_user_id ON invoices(user_id);
CREATE INDEX idx_invoices_client_id ON invoices(client_id);
CREATE INDEX idx_invoices_status ON invoices(status);
CREATE INDEX idx_invoices_due_date ON invoices(due_date);

-- Trigger para updated_at
CREATE TRIGGER update_invoices_updated_at BEFORE UPDATE ON invoices
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

/*
  # Crear tabla de ítems de factura (invoice_items)
  1. Nueva tabla: invoice_items (id uuid, invoice_id, product_id, quantity, unit_price, total_price)
  2. Seguridad: Habilitar RLS, políticas CRUD
  3. Índices: Para relaciones
*/
CREATE TABLE IF NOT EXISTS invoice_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id uuid REFERENCES invoices(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE SET NULL,
  description text, -- Allow custom description if product_id is null
  quantity integer NOT NULL CHECK (quantity > 0),
  unit_price decimal(10,2) NOT NULL CHECK (unit_price >= 0),
  total_price decimal(10,2) NOT NULL CHECK (total_price >= 0),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE invoice_items ENABLE ROW LEVEL SECURITY;

-- Políticas CRUD para ítems de factura (asociados a la factura del usuario)
CREATE POLICY "Users can view own invoice items" ON invoice_items
  FOR SELECT USING (EXISTS (SELECT 1 FROM invoices WHERE invoices.id = invoice_items.invoice_id AND invoices.user_id = auth.uid()));

CREATE POLICY "Users can insert own invoice items" ON invoice_items
  FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM invoices WHERE invoices.id = invoice_items.invoice_id AND invoices.user_id = auth.uid()));

CREATE POLICY "Users can update own invoice items" ON invoice_items
  FOR UPDATE USING (EXISTS (SELECT 1 FROM invoices WHERE invoices.id = invoice_items.invoice_id AND invoices.user_id = auth.uid()));

CREATE POLICY "Users can delete own invoice items" ON invoice_items
  FOR DELETE USING (EXISTS (SELECT 1 FROM invoices WHERE invoices.id = invoice_items.invoice_id AND invoices.user_id = auth.uid()));

-- Índices
CREATE INDEX idx_invoice_items_invoice_id ON invoice_items(invoice_id);
CREATE INDEX idx_invoice_items_product_id ON invoice_items(product_id);

-- Trigger para updated_at
CREATE TRIGGER update_invoice_items_updated_at BEFORE UPDATE ON invoice_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
