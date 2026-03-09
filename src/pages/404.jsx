export default function NotFoundPage(){
    return(
        <main>
            <div className="flex flex-col gap-12 mx-auto px-4 py-6 sm:px-6 md:px-8 max-w-7xl">
                <section className="error grow flex flex-col gap-6 rounded-md px-3 py-2 font-medium bg-gray-700">
                    <h1 className="text-4xl">Error 404 - Page Not Found</h1>
                    <p>Sorry, an error has occurred, the page you're looking for doesn't exist.</p>
                </section>
            </div>
        </main>
    )
}