function Home() {
  return (
    <div className="
      flex
      justify-center
      bg-indigo-900
    ">
      <div className="
        container
        grid
        grid-cols-2
        text-white
      ">
        <div className="
          flex
          flex-col
          justify-center
          items-center
          gap-4
          py-4
        ">
          <h2 className="text-5xl font-bold">Seja bem vindo!</h2>
          <p className="text-xl">Sinta-se livre para navegar pelo nosso site</p>
          <div className="
              flex
              justify-around
              gap-4
          ">
            <div className="
              rounded
              border-white
              border-solid
              border-2
              px-4
              py-2
            ">
              Nova Postagem
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.imgur.com/VpwApCU.png
  " alt="Imagem" className="w-2/3"/>
        </div>
      </div>
    </div>
  )
}

export default Home