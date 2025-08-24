import UserAnalytics from "./UserAnalytics"
import RevenueMetrics from "./RevenueMetrics"
import Notfications from "./Notifications"

export default function DashboradLayout ({children}) {
    return (
        <div>
            <header style={{ gridArea: 'header', border: '2px solid #000', borderRadius: '8px', padding: '16px' }}>
                {children}
            </header>
            <div style={{
            display: 'grid',
            gridTemplateAreas: `
                "analytics revenue"
                "notifications notifications"
            `,
            gridTemplateColumns: '1fr 1fr',
            gridGap: '20px',
            marginBottom: '20px'
        }}>
            {/* place the children as header */}
            
            <div style={{ gridArea: 'analytics', border: '2px solid #4caf50', borderRadius: '8px', padding: '16px' }}>
                <UserAnalytics />
            </div>
            <div style={{ gridArea: 'revenue', border: '2px solid #2196f3', borderRadius: '8px', padding: '16px' }}>
                <RevenueMetrics />
            </div>
            <div style={{ gridArea: 'notifications', border: '2px solid #ff9800', borderRadius: '8px', padding: '16px' }}>
                <Notfications />
            </div>
        </div>
        </div>
        
        
    )
    
}