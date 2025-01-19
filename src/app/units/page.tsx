import UnitCard from "../_components/UnitCard";
import Units from "../_types/Units";
import Unit from "../_types/Unit";
import Image from "../_types/Image";

export default async function Heros() {
    const Fetch: Promise<Units> = fetch('http://localhost:1337/api/units').then(response => response.json())
    const FetchLogos: Promise<Image[]> = fetch('http://localhost:1337/api/upload/files').then(response => response.json())
    const allHeroes = (await Fetch).data
    const allLogos = (await FetchLogos)
    allHeroes.map((hero: Unit) => {
        hero.Logo = allLogos.find((logo: Image) => logo.name === hero.Name + ".png")
    })
    return (
        <div className="flex flex-col items-center min-h-screen py-2">
            <h1 className="font-bold text-4xl">Unitées</h1>
            <div className="flex flex-row items-center min-h-screen py-2">
                {allHeroes.map((hero: Unit) => {
                    return <UnitCard unit={hero} key={hero.id}/>
                })}

            </div>
            
        </div>
    )
}