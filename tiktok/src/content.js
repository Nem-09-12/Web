import { useEffect, useState } from "react";

const types = ['posts', 'albums', 'todos']


const Content = () => {
    
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {avatar && URL.revokeObjectURL(avatar.preview)}
        
    }, [avatar])
    
    const handleAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    return (
    <div>
        <input
            type="file"
            onChange={handleAvatar}
        />
        {avatar && (<img src={avatar.preview}></img>)}
    </div>
    )
}

export default Content