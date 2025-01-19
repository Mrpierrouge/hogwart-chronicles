import Units from "@/app/_types/Units";

export default async function Hero({params}: Readonly<{params: Promise<{slug: string}>}>) {
    const {slug} = await params;
    const Fetch: Promise<Units> = await fetch(`http://localhost:1337/api/heroes?filters[Name]=${slug}`).then(response => response.json())
    const unit = (await Fetch).data[0]
    console.log(Fetch, unit)

    return (
        <div className="flex flex-col items-center min-h-screen py-2">
            <h1 className="font-bold text-4xl">{unit.Name}</h1>
            
        </div>
    )
}