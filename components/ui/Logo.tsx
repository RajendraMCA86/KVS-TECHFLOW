import Image from 'next/image';
import Link from 'next/link';
import kvslogo from '@/public/images/kvs_logo.png';

export default function Logo() {
  return (
    <Link href="/" className="inline-block">
      <div className="relative w-28 h-10"> {/* Adjust size as needed */}
        <Image
          src={kvslogo}
          alt="KVS Techflow Logo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </Link>
  );
}
