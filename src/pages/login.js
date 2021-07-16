import { useRouter } from 'next/router'
import { useState } from "react";
import nookies from 'nookies';
import useUser from '../hooks/useUser';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const [gitUser, setGitUser] = useState('')

  const { githubUser } = useUser();

  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()

    fetch('https://alurakut.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ githubUser: gitUser })
    }).then(async (res) => {
      const data = await res.json()
      nookies.set(null, 'USER_TOKEN', data.token, { path: '/', maxAge: 86400 * 7 });
      if (!githubUser) {
        toast.error('Usuário não existe!')
      }
      router.push('/')
    })
  }

  return (
    <>
      <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <div className="loginScreen">
          <section className="logoArea">
            <h2 className="title">Yorkut</h2>

            <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
            <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
            <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
          </section>

          <section className="formArea">
            <form className="box" onSubmit={(e) => handleSubmit(e)}>
              <p>
                Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
              </p>
              <input placeholder="Usuário" value={gitUser} onChange={(e) => setGitUser(e.target.value)} />
              <button type="submit">
                Login
              </button>
            </form>

            <footer className="box">
              <p>
                Ainda não é membro? <br />
                <a href="/login">
                  <strong>
                    ENTRAR JÁ
                  </strong>
                </a>
              </p>
            </footer>
          </section>

          <footer className="footerArea">
            <p>
              © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
            </p>
          </footer>
        </div>
      </main>
    </>
  )
}
