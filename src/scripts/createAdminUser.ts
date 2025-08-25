import { supabase } from '../lib/supabase'

async function createAdminUser() {
  try {
    console.log('🔧 Creando usuario administrador...')
    
    // Crear el usuario en Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: 'info@azokia.com',
      password: '@Teamo1110a',
      options: {
        data: {
          name: 'Administrador Azokia',
          role: 'admin'
        }
      }
    })

    if (authError) {
      if (authError.message.includes('already registered')) {
        console.log('✅ Usuario ya existe en Auth')
        return
      }
      throw authError
    }

    console.log('✅ Usuario creado en Auth:', authData.user?.email)

    // Esperar un momento para que se propague el usuario
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Crear el registro en la tabla users
    const { error: userError } = await supabase
      .from('users')
      .insert({
        id: authData.user?.id,
        email: 'info@azokia.com',
        name: 'Administrador Azokia'
      })

    if (userError) {
      console.log('ℹ️ Usuario ya existe en tabla users o error no crítico:', userError.message)
    } else {
      console.log('✅ Usuario creado en tabla users')
    }

    console.log('🎉 Usuario administrador configurado correctamente!')
    console.log('📧 Email: info@azokia.com')
    console.log('🔐 Contraseña: @Teamo1110a')

  } catch (error) {
    console.error('❌ Error creando usuario administrador:', error)
  }
}

// Ejecutar si se llama directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  createAdminUser()
}

export { createAdminUser }
