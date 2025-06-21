import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-black p-6">
            <div className="container mx-auto flex flex-col items-center">
                <div className="mb-4">
                    <Image
                        src="/docbs-white.png"
                        alt="Doc BS Logo"
                        width={150}
                        height={50}
                        className="mx-auto"
                    />
                </div>
                
                <a
                              href="tel:1234567890"
                              className="flex justify-center md:w-1/4  items-center px-6 py-3 mt-8 bg-red-600 text-white text-xl font-semibold shadow-lg hover:bg-red-700 transition-colors"
                            >
                              <Image src="/phone-receiver-silhouette.png" alt="Phone Icon" width={24} height={24} className="mr-2" />
                              801-555-1234
                            </a>

                <small className="text-gray-400 text-center mt-12">
                    &copy; {new Date().getFullYear()} Doc B'S Automotive. All rights reserved.
                </small>
            </div>
        </footer>
    );
};

export default Footer;