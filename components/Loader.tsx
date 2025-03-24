import { LoaderCircle } from 'lucide-react'

export default function Loader() {
    return (
        <div className="grid place-items-center">
            <LoaderCircle size={62} className="m-auto animate-spin text-slate-600" />
        </div>
    )
}
