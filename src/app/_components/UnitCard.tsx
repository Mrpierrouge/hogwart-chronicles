import Link from "next/link";
import Image from "next/image";
import Unit from "../_types/Unit";


export default async function UnitCard({ unit }: Readonly<{unit: Unit}>) {
    console.log(unit)
    const route = unit.Type === "Hero" ? "heros" : "units"
    return (
        <Link href={'/' + route + '/' + unit.Name} className="flex flex-col gap-5 text-white items-center border-2 p-10 rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600">
            <h2 className="w-24 text-center">{unit.Name}</h2>
            {unit.Logo && (
                <Image 
                    src={'http://localhost:1337' + unit.Logo.url} 
                    alt={unit.Name} 
                    width={unit.Logo.width} 
                    height={unit.Logo.height} 
                />
            )}
            {unit.Type !== "Hero" && (
                <p className="text-center">{unit.Type}</p>
            )}
        </Link>
        
    );
}