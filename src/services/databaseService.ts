import { prisma } from '../lib/prisma'
import { 
  CreateClientData, 
  CreateProductData, 
  CreateContractData, 
  CreatePaymentData,
  UpdateClientData,
  UpdateProductData,
  Client,
  Product,
  Contract,
  Payment
} from '../types/database'

export class DatabaseService {
  // Client Operations
  static async createClient(userId: string, data: CreateClientData): Promise<Client> {
    return prisma.client.create({
      data: {
        ...data,
        userId
      }
    })
  }

  static async getClients(userId: string): Promise<Client[]> {
    return prisma.client.findMany({
      where: { userId },
      include: {
        contracts: {
          include: {
            product: true,
            payments: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
  }

  static async getClientById(userId: string, clientId: string): Promise<Client | null> {
    return prisma.client.findFirst({
      where: {
        id: clientId,
        userId
      },
      include: {
        contracts: {
          include: {
            product: true,
            payments: {
              orderBy: { dueDate: 'asc' }
            }
          }
        },
        payments: {
          orderBy: { dueDate: 'asc' }
        }
      }
    })
  }

  static async updateClient(userId: string, clientId: string, data: UpdateClientData): Promise<Client> {
    return prisma.client.update({
      where: {
        id: clientId,
        userId
      },
      data
    })
  }

  static async deleteClient(userId: string, clientId: string): Promise<void> {
    await prisma.client.delete({
      where: {
        id: clientId,
        userId
      }
    })
  }

  // Product Operations
  static async createProduct(userId: string, data: CreateProductData): Promise<Product> {
    return prisma.product.create({
      data: {
        ...data,
        userId
      }
    })
  }

  static async getProducts(userId: string): Promise<Product[]> {
    return prisma.product.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    })
  }

  static async updateProduct(userId: string, productId: string, data: UpdateProductData): Promise<Product> {
    return prisma.product.update({
      where: {
        id: productId,
        userId
      },
      data
    })
  }

  static async deleteProduct(userId: string, productId: string): Promise<void> {
    await prisma.product.delete({
      where: {
        id: productId,
        userId
      }
    })
  }

  // Contract Operations
  static async createContract(userId: string, data: CreateContractData): Promise<Contract> {
    return prisma.contract.create({
      data: {
        ...data,
        userId
      },
      include: {
        client: true,
        product: true
      }
    })
  }

  static async getContracts(userId: string): Promise<Contract[]> {
    return prisma.contract.findMany({
      where: { userId },
      include: {
        client: true,
        product: true,
        payments: {
          orderBy: { dueDate: 'asc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
  }

  // Payment Operations
  static async createPayment(userId: string, data: CreatePaymentData): Promise<Payment> {
    return prisma.payment.create({
      data: {
        ...data,
        userId
      },
      include: {
        client: true,
        contract: true
      }
    })
  }

  static async getPendingPayments(userId: string): Promise<Payment[]> {
    return prisma.payment.findMany({
      where: {
        userId,
        status: 'PENDING',
        dueDate: {
          lte: new Date()
        }
      },
      include: {
        client: true,
        contract: true
      },
      orderBy: { dueDate: 'asc' }
    })
  }

  // Search Operations
  static async searchClients(userId: string, query: string): Promise<Client[]> {
    return prisma.client.findMany({
      where: {
        userId,
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { email: { contains: query, mode: 'insensitive' } },
          { phone: { contains: query, mode: 'insensitive' } }
        ]
      },
      include: {
        contracts: {
          include: {
            product: true
          }
        }
      }
    })
  }
}
