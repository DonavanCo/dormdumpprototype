import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, Heart, Leaf, MapPin, MessageCircle, Plus, ShieldCheck, ShoppingBag, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMarketplace } from '@/lib/marketplace';

export function MarketplaceHeader() {
  const path = useRouterState({ select: s => s.location.pathname });
  const { saved } = useMarketplace();
  return <><header className="site-header"><div className="page-container header-inner">
    <Link to="/" className="brand" aria-label="Dorm Dump home"><span className="brand-mark"><Recycle size={24} /></span>dorm dump<span className="text-primary">.</span></Link>
    <nav className="main-nav" aria-label="Main navigation">
      <Link to="/" className={`nav-item ${path === '/' || path.startsWith('/item/') ? 'active' : ''}`}><ShoppingBag size={16} />Marketplace</Link>
      <Link to="/my-listings" className={`nav-item ${path === '/my-listings' ? 'active' : ''}`}>My listings</Link>
      <Link to="/messages" className={`nav-item ${path === '/messages' ? 'active' : ''}`}><MessageCircle size={16} />Messages</Link>
      <Link to="/saved" className={`nav-item ${path === '/saved' ? 'active' : ''}`}><Heart size={16} />Saved{saved.length > 0 && <span className="text-primary">{saved.length}</span>}</Link>
    </nav>
    <div className="header-actions flex items-center gap-4"><Button asChild><Link to="/sell"><Plus />Sell an item</Link></Button><span className="avatar" aria-label="Demo student Cailyn Cook">CC</span></div>
  </div></header><div className="page-container campus-bar"><span className="flex items-center gap-2"><MapPin size={13} /><strong className="font-medium text-foreground">Alabama A&M University</strong><span className="mx-1">/</span>Your campus. Your community.</span><span className="flex items-center gap-2"><ShieldCheck size={13} />Student community<span className="ml-3 rounded bg-secondary px-2 py-0.5 text-primary">Demo</span></span></div></>;
}
export function MarketplaceFooter() { return <footer className="footer"><div className="page-container flex flex-wrap items-center justify-between gap-3"><span className="flex items-center gap-2"><Leaf size={14} />Less waste. More possibility.</span><span>Dorm Dump · Alabama A&M student prototype</span><span className="flex items-center gap-1">Made for the next chapter <ArrowUpRight size={13} /></span></div></footer>; }