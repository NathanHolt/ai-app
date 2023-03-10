import { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components'

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return data.map(post => <Card key={post.id} {...post} />)
    }

    return (
        <h2>{title}</h2>
    )
}

const SearchPage = () => {
    const [loading, setLoading] = useState(false)
    const [allPosts, setAllPosts] = useState(null)
    const [searchResults, setSearchResults] = useState(null)
    const [searchTimeout, setSearchTimeout] = useState(null)
    const [searchText, setSearchText] = useState('')

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout)

        setSearchText(e.target.value)

        setSearchTimeout(
            setTimeout(() => {
                const searchResult = allPosts.filter((post) => post.name.toLowerCase().includes(searchText.toLowerCase()) || post.prompt.toLowerCase().includes(searchText))

                setSearchResults(searchResult)
            }, 500)
        )
    }

    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true)

        try {
            const response = await fetch('http://localhost:5000/api/v1/post', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })

            if (response.ok) {
                const results = await response.json()

                setAllPosts(results.data.reverse())
            }
        } catch (err) {
            console.log(err)
            alert(err)
        } finally {
            setLoading(false)
        }
      }

      fetchPosts()
    }, [])
    

    return (
        <div className="page">
            <div>
                <h1>The Image Showcase</h1>
                <p>Browse through a collection of DALL-E generated images</p>
            </div>

            <div>
                <FormField 
                    labelName='Search posts'
                    type='text'
                    name='text'
                    placeholder='Search something...'
                    value={searchText}
                    handleChange={handleSearchChange}
                />
            </div>

            <div>
                {loading ? (
                    <div>
                        <Loader />
                    </div>
                ) : (
                    <>
                        {searchText && (
                            <h2>Showing results for <span>{searchText}</span></h2>
                        )}
                        <div className="cards">
                            {searchText ? (
                                <RenderCards
                                    data={searchResults}
                                    title='No search results found'
                                />
                            ) : (
                                <RenderCards 
                                    data={allPosts}
                                    title='No posts found'
                                />
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default SearchPage