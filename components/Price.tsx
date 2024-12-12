function Price({
  currency,
  num,
  numSize,
}: {
  currency: string;
  num: string;
  numSize: string;
}) {
  return (
    <>
      <span className={numSize}>{num}</span>
      {currency}
    </>
  );
}

export default Price;
