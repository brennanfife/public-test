import Head from "@/components/Head/Head";

export default function PublicProfilePage({ profile }: { profile: { name: string; username: string } }) {
  return (
    <>
      <Head
        title={`${profile.name} (${profile.username})`}
        type="profile"
        description="View their Cantina profile"
        profile={{
          username: profile.username,
        }}
      />
      <p>this is just a test</p>
    </>
  );
}

export const getServerSideProps = async ({ params: { username } }: any) => {
  try {
    const name = "Brennan Fife";

    return {
      props: {
        profile: { name, username },
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error?.message);
      return {
        notFound: true,
      };
    }
  }
};
