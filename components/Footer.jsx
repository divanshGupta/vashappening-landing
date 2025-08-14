export default function Footer() {
    return (
        <footer className="border-t py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold">// Vashappening Media</h3>
              <p className="mt-4 text-gray-600">Software development company</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-gray-600">
                <li>React Native</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Flutter</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Mobile App Development</li>
                <li>Web Development</li>
                <li>UI/UX design services</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="font-medium">+91 8127388337</p>
              <p className="text-gray-600 mt-2">connect@vashappening.com</p>
              <p className="text-gray-600 mt-2">D-Block, IT Colony, Ambalpadi</p>
              <p className="text-gray-600 mt-2">576103, Udupi, Karnataka</p>
            </div>
          </div>
        </footer>
    )
}