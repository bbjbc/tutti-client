import { cn, formatPrice } from '@/utils';

interface ProductAmoutInfoProps {
  price: number;
  quantity: number;
  expectedArrivalAt: string;
  className?: string;
}

const ProductAmoutInfo = ({
  price,
  quantity,
  expectedArrivalAt,
  className,
}: ProductAmoutInfoProps) => {
  return (
    <div className={cn('gap-sm flex items-center font-semibold', className)}>
      <strong className="font-style-heading leading-none font-semibold">
        {formatPrice(price)}
      </strong>
      <span className="before:pr-sm after:pl-sm text-text-tertiaryInfo before:content-['·'] after:content-['·']">
        {quantity} 개
      </span>
      <strong className="text-text-primaryInteraction text-base font-semibold md:text-lg">
        {expectedArrivalAt}
      </strong>
    </div>
  );
};

export default ProductAmoutInfo;
