/* eslint-disable react/prop-types */

const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`bg-ash rounded-xl border border-ash-light ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
