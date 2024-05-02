import { OrganizationList } from "@clerk/nextjs";

const OrganizationPage = () => {
  return (
    <div>
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
      />
    </div>
  )
}

export default OrganizationPage