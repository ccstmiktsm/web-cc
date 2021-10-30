import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    // Mengambil nama file di folder /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // menghapus ".md" dari nama file untuk 
        // dijadikan sebagai id
        const id = fileName.replace(/\.md$/, '')

        // Membaca file markdown sebagai string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Parsing post metadata menggunakan gray-matter
        const matterResult = matter(fileContents)

        // menggabungkan data dengan id
        return {
            id,
            ...matterResult.data
        }
    })

    // mengurutkan artikel berdasarkan tanggal
    return allPostsData.sort(({date: a}, {date: b}) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Gunakan gray-matter untuk parsing metadata post
    const matterResult = matter(fileContents)

    // convert HTML menjadi string menggunakan remark
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // mengabungkan data dengan id
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}