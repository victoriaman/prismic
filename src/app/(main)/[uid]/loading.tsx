export default function Loading() {
    // Define the Loading UI here
    return <div className="text-center z-10 text-red-700">
        {process.env.appName} Loading...
    </div>
}