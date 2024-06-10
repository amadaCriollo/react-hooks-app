
export const PokemonCard = ({ id, name, sprites = []}) => {
    
  return (
    <section style={{ height: 200 }}>
        <h2 className="text-capatilize">#{ id } - { name }</h2>

        {/* Imagenes  */}
       

        <div className='card-grid'>
                { sprites.map( sprite   => (
                    <img key= {sprite } src={ sprite }  alt= {name} />
                
                    ))
                }
            </div>
    </section>
  )
}

