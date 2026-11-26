import type { Content } from '@/content/types';

export default function Approach({ c }: { c: Content }) {
  return (
    <section id="approach" className="stone">
      <div className="wrap pad">
        <div className="sec-head">
          <div className="sec-label">{c.approach.label}</div>
          <div>
            <h2>{c.approach.h2}</h2>
            {c.approach.paras.map((p, i) => (
              <p className="sub" key={i}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <table className="cmp">
          <thead>
            <tr>
              <th>{c.approach.tableHeadLeft}</th>
              <th className="hi">{c.approach.tableHeadRight}</th>
            </tr>
          </thead>
          <tbody>
            {c.approach.rows.map(([left, right], i) => (
              <tr key={i}>
                <td>{left}</td>
                <td className="hi">{right}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
