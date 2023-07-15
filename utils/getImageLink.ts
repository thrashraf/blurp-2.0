
type Props = {
  id: string
  collectionId: string
  file: string
}

const getImageLink = (props: Props) => `${process.env.NEXT_PUBLIC_APP_URI}/api/files/${props.collectionId}/${props.id}/${props.file}`

export default getImageLink