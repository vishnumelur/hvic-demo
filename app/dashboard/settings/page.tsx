import { ORG } from "@/lib/content";
import { DashHeader, Card, btnPrimary, btnGhost } from "@/components/dashboard/ui";

function Field({ label, defaultValue, type = "text" }: { label: string; defaultValue: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <input
        type={type}
        defaultValue={defaultValue}
        className="mt-2 w-full rounded-xl border border-line bg-card px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
      />
    </label>
  );
}

function Toggle({ label, desc, on = true }: { label: string; desc: string; on?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div>
        <p className="text-sm font-semibold text-ink">{label}</p>
        <p className="text-sm text-muted">{desc}</p>
      </div>
      <span
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${on ? "bg-primary" : "bg-card-2"}`}
        aria-hidden
      >
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? "left-[22px]" : "left-0.5"}`} />
      </span>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <>
      <DashHeader title="Settings" subtitle="Configure your site, contact details, localisation and security.">
        <button className={btnGhost()}>Discard</button>
        <button className={btnPrimary()}>Save changes</button>
      </DashHeader>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 lg:col-span-2">
          <h3 className="font-display text-lg font-bold text-ink">General</h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Site title" defaultValue={ORG.name} />
            <Field label="Tagline" defaultValue={ORG.tagline} />
            <label className="block">
              <span className="text-sm font-medium text-ink">Default language</span>
              <select className="mt-2 w-full rounded-xl border border-line bg-card px-4 py-3 text-ink outline-none focus:border-primary">
                <option>English</option>
                <option>Malayalam (മലയാളം)</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-medium text-ink">Time zone</span>
              <select className="mt-2 w-full rounded-xl border border-line bg-card px-4 py-3 text-ink outline-none focus:border-primary">
                <option>IST — Asia/Kolkata (UTC+5:30)</option>
              </select>
            </label>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-display text-lg font-bold text-ink">Contact details</h3>
          <div className="mt-5 space-y-5">
            <Field label="Public email" defaultValue={ORG.email} type="email" />
            <Field label="Phone" defaultValue={ORG.phone} />
            <Field label="Office address" defaultValue={ORG.address} />
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-display text-lg font-bold text-ink">Security &amp; backup</h3>
          <div className="mt-2 divide-y divide-line">
            <Toggle label="Enforce SSL / HTTPS" desc="Redirect all traffic to a secure connection." on />
            <Toggle label="Daily automated backup" desc="Snapshot content & media every night." on />
            <Toggle label="Two-factor authentication" desc="Require 2FA for all admin accounts." on={false} />
            <Toggle label="Malayalam content mirror" desc="Auto-create translation drafts for new posts." on={false} />
          </div>
          <button className={`${btnGhost()} mt-5 w-full justify-center`}>Restore from backup</button>
        </Card>
      </div>
    </>
  );
}
