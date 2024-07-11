import SignUp from "@/component/signup"
import Image from "next/image"

export default function page() {
    return (
        <section className="bg-gray-700">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
                    <div>
                        <div className="flex items-center pt-4 justify-center">
                            <Image className="h-auto max-w-full w-24 flex rounded-lg" src="/image/Dummy.jpg" width={350} height={350} alt="image description" />
                        </div>
                    </div>

                    <SignUp />
                </div>
            </div>
        </section>

    )
}