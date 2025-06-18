import Navlink from "../navlink/Navlink"
function Navbar() {
  return (
    <nav className="flex justify-between text-white bg-indigo-900 pt-8 px-18">
      <div className="">
        <h1 className="text-2xl font-bold">Blog Pessoal</h1>
      </div>
      <div>
        <ul className="flex gap-4">
          <Navlink href="#" texto="Postagens" />
          <Navlink href="#" texto="Temas"/>
          <Navlink href="#" texto="Cadastrar Tema"/>
          <Navlink href="#" texto="Perfil"/>
          <Navlink href="#" texto="Sair"/>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar