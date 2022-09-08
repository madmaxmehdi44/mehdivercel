import { Routes } from "@blitzjs/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Layout from "app/core/layouts/Layout";
import createUser from "app/users/mutations/createUser";
import { UserForm, FORM_ERROR } from "app/users/components/UserForm";

const NewUserPage = () => {
  const router = useRouter();
  const [createUserMutation] = useMutation(createUser);

  return (
    <Layout title={"Create New User"}>
      <h1>Create New User</h1>

      <UserForm
        submitText="Create User"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateUser}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const user = await createUserMutation(values);
            router.push(Routes.ShowUserPage({ userId: user.id }));
          } catch (error: any) {
            console.error(error);
            return {
              [FORM_ERROR]: error.toString(),
            };
          }
        }}
      />

      <p>
        <Link href={Routes.UsersPage()}>
          <a>Users</a>
        </Link>
      </p>
    </Layout>
  );
};

NewUserPage.authenticate = true;

export default NewUserPage;
