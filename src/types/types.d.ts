
interface Post {
    id : string,
    slug : string,
    body : string,
    collections : string,
    data: {
        title : string,
        tags : string[],
    },
    render: Function
}