import { supabase } from '../lib/supabase'

/**
 * Script para crear usuario admin por defecto en desarrollo
 * Email: info@azokia.com
 * Password: @Teamo1110a
 */
export const createAdminUser = async (): Promise<void> => {
  try {
    console.log('🔧 Verificando/creando usuario admin...')

    // Verificar si el usuario admin ya existe en auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: 'info@azokia.com',
      password: '@Teamo1110a'
    })

    if (authError) {
      if (authError.message.includes('Invalid login credentials')) {
        // Crear usuario en auth
        console.log('👤 Creando usuario en autenticación...')
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: 'info@azokia.com',
          password: '@Teamo1110a',
          options: {
            data: {
              name: 'Administrador Azokia'
            }
          }
        })

        if (signUpError) {
          console.error('❌ Error creando usuario en auth:', signUpError.message)
          return
        }

        console.log('✅ Usuario creado en autenticación:', signUpData.user?.email)
      } else {
        console.error('❌ Error verificando auth:', authError.message)
        return
      }
    } else {
      console.log('✅ Usuario auth ya existe:', authData.user.email)
    }

    // Verificar si el usuario existe en la tabla users
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', 'info@azokia.com')
      .single()

    if (userError || !userData) {
      // Crear usuario en tabla users
      console.log('👤 Creando usuario en tabla users...')
      const { error: insertError } = await supabase
        .from('users')
        .insert({
          email: 'info@azokia.com',
          name: 'Administrador Azokia',
          password: '@Teamo1110a' // Nota: En producción esto debería ser hasheado
        })

      if (insertError) {
        console.error('❌ Error creando usuario en tabla:', insertError.message)
        return
      }

      console.log('✅ Usuario creado en tabla users')
    } else {
      console.log('✅ Usuario ya existe en tabla users')
    }

    console.log('🎉 Usuario admin configurado correctamente')
    
  } catch (error) {
    console.error('❌ Error inesperado en createAdminUser:', error)
    throw error
  }
}

// Ejecutar solo si se llama directamente (para testing) - Vite compatible
// En Vite, import.meta.url contiene la URL completa del módulo
const isDirectExecution = import.meta.url.includes('createAdminUser.ts') && 
                         !import.meta.url.includes('node_modules')

if (isDirectExecution) {
  console.log('⚠️  Ejecución directa detectada - Esto solo funciona en Node.js')
  console.log('ℹ️  En el navegador, usa createAdminUser() desde tu aplicación')
}
