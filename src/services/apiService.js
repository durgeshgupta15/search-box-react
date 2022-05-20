const base_url = "https://609cd6ba04bffa001792d638.mockapi.io/books?search="

export const getData = async (_data) => {
    const info_url = base_url + _data;
    let response =  await fetch(info_url)

    return response.json()
}