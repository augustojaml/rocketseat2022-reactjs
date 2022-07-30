export function Post({
  author = 'Augusto Monteiro',
  content = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus voluptatem quos nemo, hic amet!',
}) {
  return (
    <>
      <div>
        <strong>{author}</strong>
        <p>{content}</p>
      </div>
    </>
  );
}
