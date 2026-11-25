terraform {
  required_version = ">= 1.5.0"
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

variable "account_id" {
  type        = string
  description = "Cloudflare Account ID"
  default     = "5534d7620460f0ecb806f2143266742a"
}

# The Cloudflare Worker Script definition
resource "cloudflare_workers_script" "surrealmind_api" {
  account_id = var.account_id
  name       = "surrealmind-api"
  content    = file("${path.module}/../apps/api/dist/index.js")
  module     = true

  compatibility_date  = "2025-07-18"
  compatibility_flags = ["nodejs_compat"]

  plain_text_binding {
    name = "SURREAL_NAMESPACE"
    text = "surrealmind"
  }

  plain_text_binding {
    name = "SURREAL_DATABASE"
    text = "surrealmind"
  }
}

# Enable the *.workers.dev subdomain trigger
# Handled automatically by workers_dev in Cloudflare

output "worker_name" {
  value = cloudflare_workers_script.surrealmind_api.name
}
