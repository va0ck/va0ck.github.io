// https://users.roblox.com//docs/index.html
export type robloxUserApi = {
    description: string,
    created: string,
    isBanned: boolean,
    externalAppDisplayName: string,
    hasVerifiedBadge: boolean,
    id: number,
    name: string,
    displayName: string
}
export async function getUserByUserId(userId: number): Promise<robloxUserApi> { //NoBulkFunctionSoRIP!
  return fetch(`https://users.roblox.com/v1/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<robloxUserApi>
    })
    .then(data => {
        return data
    })
}

// https://thumbnails.roblox.com//docs/index.html
export type robloxThumbnailsAvatarApi = {
    targetId: number,
    state: string,
    imageUrl: string,
    version: string
}
export async function getAvatarThumbnailByUserIds(userIds: number[]): Promise<robloxThumbnailsAvatarApi[]>{ //This is bulk so we bulkin today!
  return fetch(`https://thumbnails.roblox.com/v1/users/avatar?userIds=${userIds}&size=180x180&format=Png&isCircular=false`)
  .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<{ data: robloxThumbnailsAvatarApi[] }>
    })
    .then(data => {
        return data.data
    })
}