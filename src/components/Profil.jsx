function Profil() {
    return (
      <section id="profil" className="h-[100vh] px-96 sm:px-0">
        <div className="h-full leading-10 flex justify-around items-center sm:justify-evenly">
          <div className="h-[300px] flex flex-col justify-around">
            <h1 className="leading-10">Alexis Chesneau</h1>
            <p className="text-lg">
              Bienvenue sur mon portfolio ! <br />
              Je suis Alexis Chesneau, et ce portfolio est un espace dédié à mes
              projets.
              <br /> Vous y trouverez une sélection de mes créations les plus
              récentes.
            </p>
          </div>
            <p>img</p>
        </div>
        <div className="flex absolute top-24 left-[-2.80]">
        <img className="w-[9.5rem] h-auto max-w-full" src="/images/vector_top.svg" alt="" />
        </div>
      </section>
    );
  }
  
  export default Profil;
  