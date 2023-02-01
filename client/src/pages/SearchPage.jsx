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
    const [searchText, setSearchText] = useState('')

    const handleSearchChange = (e) => {
        console.log("search change")
    }

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
                        <div>
                            {searchText ? (
                                <RenderCards
                                    data={[]}
                                    title='No search results found'
                                />
                            ) : (
                                <RenderCards 
                                    data={[]}
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