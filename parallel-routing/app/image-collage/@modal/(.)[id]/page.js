import { imageUrls } from "@/lib/getRandomImageUrl";

export default async function PhotoModal({params}){
    const {id} = await params;
    const selectedImage = imageUrls.find((img,index) => index === parseInt(id-1));
    return(
        <modal className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
                {selectedImage && (
                    <div>
                        <img src={selectedImage.url} alt={`Image ${id}`} width={600} height={600} />
                        <p>This is the detail view for image with ID: {id}</p>
                        <p>Name: {selectedImage.name}</p>
                        <p>Photographer: {selectedImage.photographer}</p>   
                        <p>Description: {selectedImage.description}</p>
                    </div>
                )}
            </div>
        </modal>
    )
}