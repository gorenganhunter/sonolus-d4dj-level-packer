import type { Database } from '@sonolus/core'
import _db from '@sonolus/free-pack/pack/db.json'

export const db = _db as Database

export const repository = Object.entries(
    import.meta.glob('@sonolus/free-pack/pack/repository/*', {
        query: '?arraybuffer',
        import: 'default',
        eager: true,
    }),
).map(([path, buffer]) => ({
    filename: path.slice(path.lastIndexOf('/') + 1),
    buffer: buffer as ArrayBuffer,
}))

export { default as engineConfiguration } from 'sonolus-d4dj-engine/EngineConfiguration?arraybuffer'
export { default as enginePlayData } from 'sonolus-d4dj-engine/EnginePlayData?arraybuffer'
export { default as enginePreviewData } from 'sonolus-d4dj-engine/EnginePreviewData?arraybuffer'
export { default as engineThumbnail } from 'sonolus-d4dj-engine/EngineThumbnail?arraybuffer'
export { default as engineTutorialData } from 'sonolus-d4dj-engine/EngineTutorialData?arraybuffer'
export { default as engineWatchData } from 'sonolus-d4dj-engine/EngineWatchData?arraybuffer'
