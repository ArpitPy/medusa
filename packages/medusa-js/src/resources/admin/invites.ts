import {
  AdminInviteDeleteRes,
  AdminListInvitesRes,
  AdminPostInvitesInviteAcceptReq,
  AdminPostInvitesReq,
} from "@medusajs/medusa"
import { ResponsePromise } from "../.."
import BaseResource from "../base"

class AdminInvitesResource extends BaseResource {
  accept(payload: AdminPostInvitesInviteAcceptReq): ResponsePromise {
    const path = `/admin/invites/accept`
    return this.client.request("POST", path, payload)
  }

  create(payload: AdminPostInvitesReq): ResponsePromise {
    const path = `/admin/invites`
    return this.client.request("POST", path, payload)
  }

  delete(id: string): ResponsePromise<AdminInviteDeleteRes> {
    const path = `/admin/invites/${id}`
    return this.client.request("DELETE", path)
  }

  list(): ResponsePromise<AdminListInvitesRes> {
    const path = `/admin/invites`
    return this.client.request("GET", path)
  }

  resend(id: string): ResponsePromise {
    const path = `/admin/invites/${id}`
    return this.client.request("POST", path, {})
  }
}

export default AdminInvitesResource
