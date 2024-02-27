export default function UserProfile(props:any) {
    const name = props.userInfo
    return (
        <div>User Info {name.id}</div>
    )
}