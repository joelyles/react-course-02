import Card from "./Card";

const Maincards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">Browse our React job board</p>
            <a href="/" className="inline-block bg-black text-white rounded-lg px-4 py-2">Browse Jobs</a>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">Post a new job to our React job board</p>
            <a href="/" className="inline-block bg-black text-white rounded-lg px-4 py-2">Post Jobs</a>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Maincards