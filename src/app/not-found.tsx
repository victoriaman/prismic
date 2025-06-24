import Link from 'next/link'
import { headers } from 'next/headers'
import Bounded from '@/components/Bounded';
import Image from 'next/image'

export default async function NotFound() {
    const headersList = await headers();
    const domain = headersList.get('host');
    return (
        <Bounded>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 place-items-center 
                rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50">
                <Image
                    src="/404.png"
                    alt="404 image"
                    width={400}
                    height={400}
                />
                <h2>
                    <p className="font-bold text-slate-800">Domain: {domain}</p>
                    <Link href="/">Go to home page</Link>
                </h2>
            </div>
        </Bounded>
    )
}