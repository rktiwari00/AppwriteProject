const conf = {
    backendUrl: String(import.meta.env.VITE_BACKEND_URL),
    projectId: String(import.meta.env.VITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_DATABASE_ID),
    collectionId: String(import.meta.env.VITE_COLLECTION_ID),
    bucketId: String(import.meta.env.VITE_BUCKET_ID),
    tinyApiKey: String(import.meta.env.VITE_TINY_CLOUD_API),
}

export default conf