import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'
export const metadata: Metadata = { title:'AI Marketing Automation | Mars', description:'Use AI to speed up content workflows, improve marketing efficiency, and scale repetitive tasks without losing quality.' }
export default function Page() {
  return (
    <ServicePageLayout
      eyebrow="AI Marketing"
      title="AI Marketing"
      titleHighlight="Automation"
      description="AI should make marketing faster and smarter, not generic. We use AI tools to support research, planning, content drafting, campaign ideas, and workflow automation while keeping strategy and quality human-led."
      features={["Content ideation and research support","Prompt workflows for faster execution","Reporting and analytics automation","Customer journey optimization","AI-assisted ad copy and creative generation","Chatbot and automation workflows","Marketing efficiency audits"]}
      cta="Use AI to save time, improve consistency, and scale smarter."
    />
  )
}