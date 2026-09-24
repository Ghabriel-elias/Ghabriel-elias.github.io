import { Check, Warn } from "@/components/Icons";

export function Checking({ label }: { label: string }) {
  return (
    <div className="auth-state" data-state="checking" data-active>
      <div className="auth-spinner" role="status" aria-live="polite" />
      <p className="lede">{label}</p>
    </div>
  );
}

export function Bad({ title, body }: { title: string; body: string }) {
  return (
    <div className="auth-state" data-state="bad" data-active>
      <div className="auth-badge is-warn">
        <Warn />
      </div>
      <h1>{title}</h1>
      <p className="lede">{body}</p>
    </div>
  );
}

type DoneProps = {
  state: string;
  title: string;
  body: string;
  open: string;
  foot: string;
  scheme: string;
};

export function Done({ state, title, body, open, foot, scheme }: DoneProps) {
  return (
    <div className="auth-state" data-state={state} data-active>
      <div className="auth-badge">
        <Check />
      </div>
      <h1>{title}</h1>
      <p className="lede">{body}</p>
      <a className="auth-open" href={scheme}>
        {open}
      </a>
      <p className="auth-foot">{foot}</p>
    </div>
  );
}
