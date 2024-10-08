import blog from "../assets/Rectangle 32 (3).png";
import blog2 from "../assets/Rectangle 19.png";
export function BlogCard() {
    return(
        <div className="grid lg:grid-cols-2 gap-8">
        {/* Related Blog Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={blog2}
            alt="Related Blog 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h4 className="font-semibold text-lg text-gray-900 mb-3">
              Class adds $30 million to its balance sheet for a Zoom-friendly education solution
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Aenean facilisis diam ut tortor tincidunt, a luctus massa bibendum. Curabitur laoreet felis a justo varius.
            </p>
            <div className="flex items-center text-gray-500 text-xs">
              <span className="mr-2">Read: 23 min</span> | <span className="ml-2">20.03.2024</span>
            </div>
          </div>
        </div>

        {/* Related Blog Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={blog}
            alt="Related Blog 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h4 className="font-semibold text-lg text-gray-900 mb-3">
              Class raises additional funding for its educational solution expansion
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Vivamus interdum neque vitae urna venenatis, id tempus sapien consectetur. Aliquam erat volutpat.
            </p>
            <div className="flex items-center text-gray-500 text-xs">
              <span className="mr-2">Read: 25 min</span> | <span className="ml-2">21.03.2024</span>
            </div>
          </div>
        </div>
      </div>
    

    )
}