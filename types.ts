import { SessionContext, SimpleRolesIsAuthorized, BlitzCtx } from "@blitzjs/auth"
import { User, UserRole } from "db"

export type Role = UserRole

declare module "@blitzjs/auth" {
  export interface Ctx extends BlitzCtx {
    session: SessionContext
  }
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: User["id"]
      role: Role
      views?: number
    }
  }
}
