import Head from "@/components/Head/Head";

export default function PublicProfilePage({
  profile,
}: {
  profile: { name: string; username: string; activeProjects: number };
}) {
  return (
    <>
      <Head
        title={`${profile.name} (${profile.username})`}
        type="profile"
        description={`This user currently has ${profile.activeProjects} active projects.`}
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
    const activeProjects = 5;

    return {
      props: {
        profile: { name, username, activeProjects },
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
