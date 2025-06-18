import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-white bg-indigo-900 gap-2 py-4 px-18 mt-auto">
      <h2 className="text-xl font-bold">Blog Pessoal Generation | Copyright: 2025</h2>
      <h6>Acesse nossas Redes Sociais</h6>
      <div className="flex gap-2">
        <LinkedinLogo size={48} color="#ffffff" />
        <InstagramLogo size={48} color="#ffffff" />
        <FacebookLogo size={48} color="#ffffff" />
      </div>
    </footer>
  )
}

export default Footer