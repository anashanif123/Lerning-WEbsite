import Rectangle from "../assets/Rectangle 33 (8).png";
import Rectangle1 from "../assets/Rectangle 34 (1).png";
import Rectangle2 from "../assets/Rectangle 33 (9).png";
import Rectangle3 from "../assets/Rectangle 32 (3).png";
import Rectangle4 from "../assets/image 12.png";

function Articles({text,image }) {
    
    const articles = [
        {
            image: Rectangle,
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            author: "Lina",
            price: "$80",
            oldPrice: "$100",
            category: "Design",
            duration: "3 Month"
        },
        {
            image: Rectangle1,
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            author: "Lina",
            price: "$80",
            oldPrice: "$100",
            category: "Design",
            duration: "3 Month"
        },
        {
            image: Rectangle2,
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            author: "Lina",
            price: "$80",
            oldPrice: "$100",
            category: "Design",
            duration: "3 Month"
        },
        {
            image: Rectangle3,
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            author: "Lina",
            price: "$80",
            oldPrice: "$100",
            category: "Design",
            duration: "3 Month"
        }
    ];

        
            return (
              
                <div className="container mx-auto p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-semibold">{text}</h1>
                        <a href="#" className="text-teal-500">See all</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {articles.map((article, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={article.image} alt={`Article ${index + 1}`} className="w-full h-48 object-cover"/>
                                <div className="p-4">
                                    <div className="flex items-center text-gray-500 text-sm mb-2">
                                        <span className="mr-2">{article.category}</span>
                                        <span>{article.duration}</span>
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
                                    <p className="text-gray-600 mb-4">{article.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src={Rectangle4} alt="Author" className="w-8 h-8 rounded-full mr-2"/>
                                            <span>{article.author}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="line-through text-gray-400 mr-2">{article.oldPrice}</span>
                                            <span className="text-teal-500 font-semibold">{article.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
        export default Articles
    
