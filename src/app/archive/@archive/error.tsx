"use client";

type Props = {
  error: { message: string };
};
export default function FilterError({ error }: Props) {
  // console.log(error);

  return (
    <div id="error">
      <h2>An Error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
